import { Footer } from "flowbite-react";
import image from '../../assets/images/logo.png'
const Footar = () => {
    return (
        <Footer container>
      <div className="w-full text-center">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
          <Footer.Brand
            href="#"
            src={image}
            alt="Adopt-A-Pet Haven Logo"
            name="Adopt-A-Pet Haven"
          />
          <Footer.LinkGroup>
            <Footer.Link href="#">About</Footer.Link>
            <Footer.Link href="#">Privacy Policy</Footer.Link>
            <Footer.Link href="#">Licensing</Footer.Link>
            <Footer.Link href="#">Contact</Footer.Link>
          </Footer.LinkGroup>
        </div>
        <Footer.Divider />
        <Footer.Copyright href="#" by="Adopt-A-Pet Haven™" year={2024} />
      </div>
    </Footer>
    );
};

export default Footar;