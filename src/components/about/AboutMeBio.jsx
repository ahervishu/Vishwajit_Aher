import profileImage from "../../images/profile..png";
import { useContext } from "react";
import AboutMeContext from "../../context/AboutMeContext";
import "./About.css";

const AboutMeBio = () => {
  const { aboutMe } = useContext(AboutMeContext);

  return (
    <div className="block sm:flex sm:gap-10 mt-10 sm:mt-20">
      <div className="w-full sm:w-1/4 mb-7 sm:mb-0">
        <div className="relative image-container">
          <img src={profileImage} className="rounded-lg w-96 image-3d" alt="" />
        </div>
      </div>

      <div className="font-general-regular w-full sm:w-3/4 text-left flex items-center">
        {aboutMe.map((bio) => (
          <div
            key={bio.id}
            className="mb-4 text-ternary-dark dark:text-ternary-light text-lg"
          >
            {bio.bio.includes("•") ? (
              <ul className="list-disc pl-5">
                {bio.bio
                  .split("\n")
                  .filter((line) => line.trim() !== "")
                  .map((line, index) => (
                    <li key={index}>
                      {line.split("*").map((part, i) =>
                        i % 2 === 1 ? (
                          <strong key={i}>{part}</strong>
                        ) : (
                          part
                        )
                      )}
                    </li>
                  ))}
              </ul>
            ) : (
              <p>
                {bio.bio.split("*").map((part, i) =>
                  i % 2 === 1 ? (
                    <strong key={i}>{part}</strong>
                  ) : (
                    part
                  )
                )}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutMeBio;
