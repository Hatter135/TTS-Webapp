function speak(text) {

    const speech = new SpeechSynthesisUtterance(text);

    speech.lang = "en-GB";
    speech.pitch = 0.5;
    speech.rate = 1;
    speech.volume = 1;

    window.speechSynthesis.speak(speech);

}




function startListening() {
    const SpeechRecognition = 
        window.SpeechRecognition || 
        window.webkitSpeechRecognition;

    const recognition = new SpeechRecognition();

    recognition.start();

    document.getElementById("output").textContent = "waiting for command...";

    recognition.onresult = function(event) {
        const command =
            event.results[0][0].transcript.toLowerCase();

        console.log(command);

        if (command.includes("hello")) {

            document.getElementById("output").textContent = "Hello to you too!";

            speak("Hello to you too!");

        }

        else if (command.includes("how are you")) {
            document.getElementById("output").textContent = "I'm doing well my friend, thank you!";
            speak("I'm doing well my friend, thank you!");
        }

        else if (command.includes("who are you")) {
            document.getElementById("output").textContent = "I'm Jerald, here to talk to you and help you out!";
            speak("I'm Jerald, here to talk to you and help you out!");

        }

        else if (command.includes("help")) {
            document.getElementById("output").textContent = "you can ask me how I am, say hello to me, or ask who I am!";
            speak("you can ask me how I am, say hello to me, or ask who I am!");

        }

        else if (command.includes("how do you work")) {
            document.getElementById("output").textContent = "I am a simple voice assistant that uses the browser’s built-in speech recognition and text-to-speech features. \nI listen to voice commands and respond to the user both visually and verbally. \nThe JavaScript code I use is the SpeechRecognition or webkitSpeechRecognition object to access your microphone and convert spoken words into text. \nWhen the startListening() function I have is activated, my application begins listening for speech and stores the recognised words inside the command variable. \nI then uses if statements to check whether specific phrases such as “hello” or “how are you” have been spoken. \nIf a matching command is detected, the speak() function is called, which uses a SpeechSynthesisUtterance object to convert text into spoken audio. \nAt the same time, the response is displayed on the webpage by changing the text inside the HTML element with the ID output. \n This allows the application to communicate with the user through both text and speech, creating an interactive voice-controlled experience. \n That's how I work!";
            speak("I am a simple voice assistant that uses the browser’s built-in speech recognition and text-to-speech features. I listen to voice commands and respond to the user both visually and verbally. The JavaScript code I use includes the SpeechRecognition or webkitSpeechRecognition object to access your microphone and convert spoken words into text. When the startListening() function is activated, the application begins listening for speech and stores the recognised words inside the command variable. It then uses if statements to check whether specific phrases such as “hello” or “how are you” have been spoken. If a matching command is detected, the speak() function is called, which uses a SpeechSynthesisUtterance object to convert text into spoken audio. At the same time, the response is displayed on the webpage by changing the text inside the HTML element with the ID output. This allows the application to communicate with the user through both text and speech, creating an interactive voice-controlled experience. That’s how I work!");

        }

        else if (command.includes("this hasn't gone tremendously well")) {
            speak("opening unhappy.mp4")
            document.getElementById("output").textContent = "opening unhappy.mp4";
            setTimeout(() => {
            window.open("unhappy.mp4", "_blank");
            }, 2000)

        }

        else if (command.includes("rave")) {
            speak("opening rave on youtube")
            document.getElementById("output").textContent = "opening rave on YouTube";
            setTimeout(() => {
            window.open("https://youtu.be/Cqd1Gvq-RBY?si=-sN7Z6sYD3qylDTM&t=62", "_blank");
            }, 2000)

        }

        else {
            document.getElementById("output").textContent = "I'm sorry, that's not a command I recognise. please try again, or try saying 'help' for assistance.";
            speak("I'm sorry, that's not a command I recognise. please try again, or try saying 'help' for assistance.");
        }


    };

};