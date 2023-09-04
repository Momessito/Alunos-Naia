import Hero from "./Components/hero";
import HeroQuiz from "./Components/heroquiz";

export default function Quiz(){
    return(
        <div>
            <HeroQuiz />
            <div className="collapse collapse-arrow bg-base-200">
  <input type="radio" name="my-accordion-2" checked="checked" /> 
  <div className="collapse-title text-xl font-medium">
        QUIZZES
  </div>
  <div className="collapse-content"> 
  <p>Todos os Quizes</p>
  </div>
</div>
            <div className="collapse collapse-arrow bg-base-200">
  <input type="radio" name="my-accordion-2" /> 
  <div className="collapse-title text-xl font-medium">
    Quiz - Hardware Software
  </div>
  <div className="collapse-content"> 
  <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdZ-WsjnGzsyYwSKJoWbAPF11zDCupSFQcnlW_rV8EHk6Krrg/viewform?embedded=true" width="100%" height="400px " frameborder="0" marginheight="0" marginwidth="0">Carregando…</iframe>
  </div>
</div>
            <div className="collapse collapse-arrow bg-base-200">
  <input type="radio" name="my-accordion-2" /> 
  <div className="collapse-title text-xl font-medium">
    Quiz - Internet
  </div>
  <div className="collapse-content"> 
<iframe src="https://docs.google.com/forms/d/e/1FAIpQLScfRW6NcY7Rv1WyioEXqE7oSio1IcXY_lBdJH88dZfiP3ubYg/viewform?embedded=true" width="100%" height="1174" frameborder="0" marginheight="0" marginwidth="0">Carregando…</iframe>  </div>
</div>
        </div>
    );
}
