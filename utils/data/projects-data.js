import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Campus Nexus',
        description: 'The Integrated Student Management System simplifies educational administration. It offers efficient solutions for managing student, improving efficiency and quality in academic institutions.',
        tools: ['Java', 'Netbeans', "MySQL", "JDBC",],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 2,
        name: 'Sudoku-Sage',
        description: "An intuitive Sudoku-solving app with light and dark themes, real-time error detection, grid reset functionality, and number highlighting for easy puzzle solving.",
        tools: ['Java', 'Android Studio'],
        role: 'Android Developer',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 3,
        name: 'Land-Water Mapper',
        description: 'Me and My team built an AI-based Demographic Location Surface Water Mapping Project which utilizes satellite imagery and advanced image processing techniques to map surface water bodies. Additionally, it incorporates predictive modeling to forecast future land and water patterns, aiding in sustainable planning efforts.',
        tools: ['Python', 'NumPy', 'Pandas', 'Matplotlib', 'Rasterio', 'scikit-learn', 'xgboost', 'TensorFlow', 'SciPy', 'HTML', 'CSS', 'JS'],
        code: '',
        role: 'ML ',
        demo: '',
        image: realEstate,
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },