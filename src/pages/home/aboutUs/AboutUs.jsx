import image from '../../../assets/images/about.jpg'

const AboutUs = () => {
    return (
        <div className='my-10 bg-blue-gray-200 p-5'>
        <h2 className='text-3xl text-center font-bold my-10'>About Us</h2>
        <div className='lg:flex'>            
            <div>
                <p className='my-5'>Pet Haven was created with a single mission: to connect loving families with pets in need of a forever home. Our website serves as a comprehensive platform where you can explore different types of pets, learn about their care, and find resources to help you on your pet adoption journey.</p>
                
                <p className='my-5'><span className='font-bold'>How We Work </span><br />
                Pet Listings: Browse through detailed profiles of pets available for adoption from shelters and rescue groups.<br />
                Educational Resources: Access articles, guides, and expert advice on pet care, behavior, and training. <br />
                Community Support: Join a community of pet lovers, share experiences, and get support from fellow adopters and pet experts<br />
                Adoption Process: Learn about the steps involved in adopting a pet and find tips to prepare your home for a new furry family member.</p>               
            </div>
            <img className='w-1/2 ml-5' src={image} alt="" />
        </div>
      
    </div>
    );
};

export default AboutUs;