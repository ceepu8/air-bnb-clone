import { FOOTER_COPYRIGHT } from "@/constants"
import { FOOTER_DATA } from "@/services"

const Footer = () => {
  const { content, copyright } = FOOTER_COPYRIGHT

  const renderColumn = () =>
    FOOTER_DATA.map((value, index) => {
      const { title, subs } = value
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
      )
    })

  const renderCopyRight = () => <p>{copyright}</p>

  const renderContent = () => (
    <ul className="flex">
      {content.map((value, index) => (
        <li key={index} className="ml-5 !list-disc">
          {value}
        </li>
      ))}
    </ul>
  )

  return (
    <footer className="mt-12 bg-gray">
      <div className="m-auto max-w-[1120px] py-12">
        <div className="flex items-start justify-between">{renderColumn()}</div>
        <div className="flex-center mt-5">
          {renderCopyRight()}
          {renderContent()}
        </div>
      </div>
    </footer>
  )
}

export default Footer
