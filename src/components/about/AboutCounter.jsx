import { useCountUp } from "react-countup";
import CounterItem from "./CounterItem";

const AboutCounter = () => {
	const startDate = new Date('2022-04-01');
	const today = new Date();
	let yearsDiff = today.getFullYear() - startDate.getFullYear();
	let monthsDiff = today.getMonth() - startDate.getMonth();
	if (monthsDiff < 0) {
	  yearsDiff -= 1;
	  monthsDiff += 12;
	}
	const daysInMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
	const daysDiff = (today - startDate) / (1000 * 60 * 60 * 24);
	const fractionalMonths = (daysDiff % (365.25 / 12)) / daysInMonth;
	const totalMonths = monthsDiff + fractionalMonths;
  useCountUp({ ref: "experienceCounter", end: Number(`${yearsDiff}.${totalMonths.toFixed()}`), duration: 2 });
  useCountUp({ ref: "githubStarsCounter", end: 20, duration: 2 });
  useCountUp({ ref: "feedbackCounter", end: 92, duration: 2 });
  useCountUp({ ref: "projectsCounter", end: 77, duration: 2 });

  return (
    <div className="mt-10 sm:mt-20 bg-primary-light dark:bg-ternary-dark shadow-sm">
      <div className="font-general-medium container mx-auto py-20 block sm:flex sm:justify-between items-center">
        <CounterItem
          title="Years of experience"
          counter={<span id="experienceCounter" />}
          measurement=""
        />

        <CounterItem
          title="Stars on GitHub"
          counter={<span id="githubStarsCounter" />}
          measurement="k+"
        />

        <CounterItem
          title="Positive feedback"
          counter={<span id="feedbackCounter" />}
          measurement="%"
        />

        <CounterItem
          title="Projects completed"
          counter={<span id="projectsCounter" />}
          measurement="%"
        />
      </div>
    </div>
  );
};

export default AboutCounter;
