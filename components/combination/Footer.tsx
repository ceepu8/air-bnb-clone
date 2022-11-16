import { FOOTER_COPYRIGHT, FOOTER_DATA } from '@/constants/footer';

const Footer = () => {
  return (
    <footer className="mt-12 bg-grey-200">
      <div className="max-w-[1120px] m-auto py-12">
        <div className="flex items-start justify-between">
          {FOOTER_DATA.map((value, index) => {
            const { title, subs } = value;
            return (
              <div key={index}>
                <p className="font-extrabold">{title}</p>
                <ul>
                  {subs.map((sub, index) => (
                    <li key={index} className="mt-5">
                      {sub}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
        <div className="flex items-center mt-5">
          <p>{FOOTER_COPYRIGHT.copyright}</p>
          <ul className="flex">
            {FOOTER_COPYRIGHT.content.map((value, index) => (
              <li key={index} className="!list-disc ml-5">
                {value}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
