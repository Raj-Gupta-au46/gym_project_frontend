import AnchorLink from "react-anchor-link-smooth-scroll"
import { SelectedPage } from "@/shared/types"

type Props = {
    page: string,
    selectedPage:SelectedPage
    setSelectedPage: (value: SelectedPage) => void;
}

const Link = ({page,selectedPage,setSelectedPage}:Props) => {
const lowerCasePage= page.toLocaleLowerCase().replace(/ /g, "") as SelectedPage

    return (
        <AnchorLink
        href={`#${lowerCasePage}`}
        onClick={() => setSelectedPage(lowerCasePage)}
        className={`${selectedPage === lowerCasePage ? "test-primary-500" : ""} 
        transition duration-500 hover:text-primary-300
        `}
        >
            {page}
        </AnchorLink>
    )
}

export default Link