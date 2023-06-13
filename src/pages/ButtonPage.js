import Button from "../components/Button";
import { GoBell, GoCloudDownload, GoDatabase, GoArrowBoth, GoKeyboard } from 'react-icons/go'

function ButtonPage() {
    const handleClick = () => {
        console.log('click');
    }

    return <div>
        <div>
            <Button primary rounded onClick={handleClick} className="mb-5">
                <GoBell /> Primary
            </Button>
        </div>
        <div>
            <Button secondary>
                <GoCloudDownload />
                Secondary
            </Button>
        </div>
        <div>
            <Button success>
                <GoDatabase />
                Success
            </Button>
        </div>
        <div>
            <Button warning>
                <GoArrowBoth />
                Warning
            </Button>
        </div>
        <div>
            <Button danger rounded>
                <GoKeyboard />
                Danger
            </Button>
        </div>
    </div>;
}

export default ButtonPage;