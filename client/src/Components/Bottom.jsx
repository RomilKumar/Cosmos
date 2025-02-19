import image1 from '/assets/image1.jpg';
import image2 from '/assets/image2.jpg';
import image3 from '/assets/image3.jpg';
import image4 from '/assets/image4.jpg';

export default function Bottom() {
    function Section() {
        return (
            <>
                <div className="flex justify-start space-x-4">
                    <div className="text-gray-500 text-left">
                        KEEP EXPLORING
                    </div>
                    
                    <h1 className="text-left">
                        Discover More
                    </h1>
                </div>


                <div className="flex space-x-4 justify-center mt-6">
                <div className="flex-shrink-0">
                    <img src={image1} alt="Image 1" className="w-[22.5vw] h-[80vh] object-cover shadow-md" />
                </div>
                <div className="flex-shrink-0">
                    <img src={image2} alt="Image 2" className="w-[22.5vw] h-[80vh] object-cover shadow-md" />
                </div>
                <div className="flex-shrink-0">
                    <img src={image3} alt="Image 3" className="w-[22.5vw] h-[80vh] object-cover shadow-md" />
                </div>
                <div className="flex-shrink-0">
                    <img src={image4} alt="Image 4" className="w-[22.5vw] h-[80vh] object-cover shadow-md" />
                </div>
            </div>
            </>
        );
    }

    return (
        <Section />
    );
}
