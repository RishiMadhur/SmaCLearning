const data = [
    {
        Id:1,
        Name:"K.Sandhya",
        FatherName:"K.Sriramulu",
        MotherName:"K.Thulasi", 
        PhoneNo:9390440885,
        Email:"Sandhyaranikamminana@gmail.com",
        DOB:"26-03-2002",
        Address:"GE,Akshara Hasini Arcade...."
     },
     {
        Id:2,
        Name:"K.Rishi",
        FatherName:"",
        MotherName:"", 
        PhoneNo:2456789,
        Email:"",
        DOB:"27-03-2002",
        Address:""
     },
     {
        Id:3,
        Name:"l.sravani",
        FatherName:"",
        MotherName:"", 
        PhoneNo:567890,
        Email:"",
        DOB:"",
        Address:""
     },
     {
        Id:4,
        Name:"K.Sandeep",
        FatherName:"",
        MotherName:"", 
        PhoneNo:378890,
        Email:"",
        DOB:"",
        Address:""
     },
     {
        Id:5,
        Name:"K.Shanmukh",
        FatherName:"",
        MotherName:"", 
        PhoneNo:6789898,
        Email:"",
        DOB:"",
        Address:""
     }
]

const PersonalData = data.map((data, index) => ({ ...data, index }));

export default PersonalData;

