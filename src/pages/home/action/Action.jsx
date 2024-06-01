import image from '../../../assets/images/Action.webp'

const Action = () => {
    return (
        <div className='my-10'>
            <h2 className='text-3xl text-center font-bold my-10'>Adopt a Pet, Change a Life</h2>
            <div className='lg:flex'>
                <img className='w-1/2 mr-5' src={image} alt="" />
                <div>
                    <p className='my-5'>Be a hero and open your heart and home to a pet in need. Adopting a pet is a life-changing experience, both for you and your new furry friend. Each adoption helps save lives and makes room for more animals in shelters.</p>
                    <p className='my-5'><span className='font-bold'>Why Adopt? </span><br />
                        Save a Life: Every adoption gives a homeless animal a second chance.<br />
                        Unconditional Love: Experience the joy of companionship and loyalty. <br />
                        Healthy Pets: Shelters ensure pets are vaccinated, spayed/neutered, and health-checked.<br />
                        Support Your Community: Help reduce overpopulation and support local shelters.</p>
                   
                </div>
            </div>
            <div className='my-5'>
                <h3 className='mb-5 font-bold'>Start Your Journey</h3>
                <p className='my-5'>Visit our adopt center or rescue group to meet your new best friend. Not ready to adopt? Consider fostering or volunteering. Your involvement can make a world of difference.</p>
                <p>Adopt today and give a pet the loving home they deserve. Together, we can make a difference—one adoption at a time.</p>
            </div>
        </div>
    );
};

export default Action;