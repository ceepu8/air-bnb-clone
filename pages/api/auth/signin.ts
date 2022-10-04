import type { NextApiRequest, NextApiResponse } from "next";
import httpProxy, { ProxyResCallback } from "http-proxy";
import Cookies from "cookies";

const proxy = httpProxy.createProxyServer();

export const config = {
  api: {
    bodyParser: false,
  },
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  return new Promise((resolve) => {
    const handleLoginResponse: ProxyResCallback = (proxyRes, req, res) => {
      let body = "";
      proxyRes.on("data", (chunk) => {
        body += chunk;
      });

      proxyRes.on("end", () => {
        try {
          const { statusCode, content } = JSON.parse(body);

          let message = JSON.parse(body).message;

          if (!message) {
            message = "Login successfully!";
          }

          const token = content.token;

          const cookies = new Cookies(req, res, {
            secure: process.env.NODE_ENV !== "development",
          });

          const tomorrow = new Date();
          tomorrow.setDate(tomorrow.getDate() + 1);

          cookies.set("token", token, {
            httpOnly: true,
            sameSite: "lax",
            expires: tomorrow,
          });

          (res as NextApiResponse).status(200).json({ statusCode, message });
        } catch (error) {
          console.log(error);

          (res as NextApiResponse)
            .status(500)
            .json({ message: "Something went wrong" });
        }
        resolve(true);
      });
    };

    proxy.once("proxyRes", handleLoginResponse);

    proxy.web(req, res, {
      target: process.env.API_URL,
      changeOrigin: true,
      selfHandleResponse: true,
    });
  });
}
