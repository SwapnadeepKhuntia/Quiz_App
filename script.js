let questioncontainer=document.getElementById("questioncontainer");
let chack=document.getElementById("chack");
let answercontainer=document.getElementById("answercontainer");
let quizapp=[
        {
            question:"Who are the the Founder of Microsoft",
            answers:{
            a:"Steve Chen",
            b:"Chad Hurley",
            c:"Bill Gates",
            d:"David Packard"
            },
            carrecctanswer:"c"
        },
        {
            question:"Who is the Founder of Adidas",
            answers:{
            a:"Steve Chen",
            b:"Adolf Dassler",
            c:"Bill Gates",
            d:"David Packard"
            },
            carrecctanswer:"b"
        },
        {
            question:"Who are the the Founder of wikipedia",
            answers:{
            a:"Jimmy wales and Larry Sanger",
            b:"Adolf Dassler",
            c:"Chad Hurley",
            d:"Steve Chen"
            },
            carrecctanswer:"a"
        }
    ];

    function buildquiz()
    {
      let output=[];
      quizapp.forEach((el,index)=>{
        let answersarr=[];
         for (const key in el.answers) {
          answersarr.push(
            `<label><br><input type="radio" name="question${index}" value="${key}"> ${el.answers[key]}</label><br>`
            )
         }
         output.push(`<div id="quetions">${index+1}. ${el.question}?</div><div class="answers">${answersarr.join('')}</div><br>`);
      })
      questioncontainer.innerHTML=output.join('');
    }
    buildquiz();

    function caractans()
    {
        let allquestion=questioncontainer.querySelectorAll('.answers');
        let count=0;
        quizapp.forEach((el,index)=>{
           let chackedvalue=`input[name="question${index}"]:checked`;
           let onequestion=allquestion[index];
           let caans= (onequestion.querySelector(chackedvalue)||{}).value;
           if(caans===el.carrecctanswer)
           {
              count++;
              allquestion[index].style.color="green";
            //   answercontainer.innerHTML=`${count} out of ${quizapp.length}`;
           }
           else
           {
              allquestion[index].style.color="red";
            //   answercontainer.innerHTML=`0 out of ${quizapp.length}`
           }
        })
    }

    chack.addEventListener("click",caractans)
