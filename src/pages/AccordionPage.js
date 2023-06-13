//import Button from "./components/Button";
import Accordion from "../components/Accordion";
//import { GoBell, GoCloudDownload, GoDatabase, GoArrowBoth, GoKeyboard } from 'react-icons/go'

function AccordionPage() {
    const items = [
        {
            id: 'cbchjdclj',
            label: 'Can I use React?',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, totam.'
        },
        {
            id: 'lskdsksd',
            label: 'Can I use React?',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora quos dolor obcaecati atque corporis modi praesentium! Doloribus provident nam repudiandae!'
        },
        {
            id: 'pkosdmk',
            label: 'Can I use React?',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, totam.'
        }
    ];
    return <Accordion items={items} />
}

export default AccordionPage;