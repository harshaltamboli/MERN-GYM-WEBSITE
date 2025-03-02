import React from "react";

const WorkoutSessions = () => {
  return (
    <section className="workout_session">
      <div className="wrapper">
        <h1>TOP WORKOUT SESSION</h1>
        <p>

          Push your limits with high-intensity workout sessions designed for maximum results. 
          From strength training and cardio to functional workouts, experience expert-led sessions that transform your fitness journey! 💪🔥
        </p>
        <img src="/img5.jpg" alt="workout" />
      </div>
      <div className="wrapper">
        <h1>FEATURED BOOTCAMPS</h1>
        <p>
        24/7 Access & Flexible Plans – Workout anytime, day or night,
         with round-the-clock gym access. Choose from affordable and customizable membership plans to fit your lifestyle.
        </p>
        <div className="bootcamps">
          <div>
            <h4>Personalized Diet & Nutrition Guidance –</h4>
            <p>
            Get expert meal plans and diet consultations 
            tailored to your fitness goals. Balance your workouts with the right nutrition for faster and sustainable results
            </p>
          </div>
          <div>
            <h4>Advanced Fitness Tracking – 

</h4>
            <p>
            Monitor your progress with smart fitness tracking tools.
             Get real-time insights on your workouts, calories burned, and overall improvement.
            </p>
          </div>
          <div>
            <h4>Group Fitness Classes – </h4>
            <p>
            Stay motivated with high-energy group classes like Zumba, Yoga, HIIT, and more.
            Train with like-minded people and enjoy a fun, engaging fitness experience
            </p>
          </div>
          <div>
            <h4>Strength & Conditioning Programs – .</h4>
            <p>
            Improve your strength, endurance, and flexibility with scientifically designed training routines.
             Get access to targeted workouts that help you achieve peak performance
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkoutSessions;