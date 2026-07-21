import buildingImg from '../assets/images/building.jpg';
import planImg from '../assets/images/plan.jpg';
import elevationImg from '../assets/images/elevations.jpg';
import interiorImg from '../assets/images/interior.jpg';

export const navLinks = [
  {name: 'Home', path: '/'},
  {name: 'About Us', path: '/about'},
  {name: 'Services', path: '/services'},
  {name: 'Portfolio', path: '/portfolio'},
  {name: 'Contact', path: '/contact'}
];

export const contactDetails = {
  address: '# 5A, 2nd floor ,VSM Tower, Hesaraghatta Road, Bangalore-57, India',
  phone: '+91 8861233888 / 9844181181',
  email: 'adbuthabuildcon@gmail.com'
};

export const services = [
  {id: '01', title: 'Architectural Planning & Approvals', description: 'From concept to approval, we create innovative architectural designs and handle all required statutory approvals, including BBMP sanction plans, ensuring your project begins on a strong legal and technical foundation.'},
  {id: '02', title: 'Construction & Project Execution', description: 'We deliver high-quality residential and commercial construction with expert site supervision and end-to-end project management, ensuring timely completion, superior craftsmanship, and complete transparency.'},
  {id: '03', title: 'Structural & Engineering Solutions', description: 'Our engineering team provides safe, efficient, and sustainable structural, MEP, and prefabricated building solutions that meet modern construction standards and optimize project performance..'},
  {id: '04', title: 'Interior Design & Space Transformation', description: 'We design functional and elegant interiors tailored to your lifestyle or business needs, combining aesthetics, comfort, and practicality to create inspiring spaces.'},
  {id: '05', title: 'Property Consultancy & Cost Management', description: 'Make informed property decisions with our professional estimation, valuation, and real estate consultancy services, helping you maximize value while staying within budget.'}
];

export const portfolioItems = [
  {
    id: 'buildings',
    title: 'Buildings',
    category: 'Completed Construction',
    image: buildingImg
  },
  {
    id: 'plans',
    title: 'Plans',
    category: 'Architectural Layouts',
    image: planImg
  },
  {
    id: 'elevation-designs',
    title: 'Elevation Designs',
    category: 'Exterior Aesthetics',
    image: elevationImg
  },
  {
    id: 'interior-works',
    title: 'Interior Works',
    category: 'Spaces & Finishing',
    image: interiorImg
  }
];