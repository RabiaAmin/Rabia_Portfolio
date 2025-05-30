import emailjs from "emailjs-com";


export const sendMessage = async (formData)=>{
   try {
   await emailjs.send(
         "service_vr1vadc",      // Replace with your actual service ID
        "template_tniekxn",     // Replace with your actual template ID
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "YAVrxTSrQ5pPY4gyO"
    );


    
   } catch (error) {
       throw new Error(error.message || "Error sending Message");
   }
}