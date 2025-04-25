import { useNavigate } from 'react-router-dom';

const Card = ({ template }) => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/template/${template.id}`);
    };
    return (
        <>
           
            <div
            onClick={handleClick}
                class="bg-white shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] w-full max-w-sm rounded-lg overflow-hidden mx-auto font-[sans-serif] mt-4">
                <div class="min-h-[256px]">
                    <img src={template.image} class="w-full" />
                </div>

               
            </div>
        </>
    );
};

export default Card;
        