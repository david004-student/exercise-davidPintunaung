const message = () => {
    const data = "Personal Iformation";
    const information = ["David Pintunaung", "20 Years old", "Single", "Informatika", "Computer Science", "Asrama Crystal", "Penetration testing, Computer Security, Ethical Hacking"];


    return `
    <h2 style="text-align: center;">${data}</h2>
    <hr/>

    <p><strong>Name:</strong> ${information[0]}</p>
    <p><strong>Age:</strong> ${information[1]}</p>
    <p><strong>Status:</strong> ${information[2]}</p>
    <p><strong>Major:</strong> ${information[3]}</p>
    <p><strong>Faculty:</strong> ${information[4]}</p>
    <p><strong>Address:</strong> ${information[5]}</p>
    <p><strong>Interest:</strong> ${information[6]}</p>
        

    `;
};

export default message;