import mainimg from "./images/home.png";

export default function Home() {
  const handleClick = (e) => {
    const rectangle = document.querySelector(".rectangle-2");
    const rightPanel = document.querySelector(".right");

    rectangle.classList.add("zoom-out");
    rightPanel.style.opacity = 1;

    // You can add further logic here for additional animations or actions before navigating

      window.location.href = "/hiw";
  };
  return (
    <div className="view">
      <div class="left">
        <div class="heading1">
          <span>
            <span class="heading1-span">S H O P </span>
            <span class="heading1-span2"> L O C A L</span>
          </span>
        </div>
        <div class="group-4">
          <div class="where-community-matters">where community matters.</div>

          <div
            class="rectangle-2"
            onMouseEnter={(e) => {
              e.target.style.background = "rgba(255, 172, 172, 0.69)";
            }}
            onMouseLeave={(e) => {
              e.target.style.background = "rgba(255, 202, 202, 0.69)";
            }}
            onClick = {handleClick}
          >
            how it works →
          </div>
        </div>
      </div>
      <div className="right"></div>
      <img className="mainimg" src={mainimg} />
      
    </div>
  );
}