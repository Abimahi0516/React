import { useState } from "react";

function ProfileCard() {
  const [following, setFollowing] = useState(false);

  return (
    <div className="mx-auto max-w-sm overflow-hidden rounded-2xl bg-white text-center shadow-xl">
      <div className="h-28 bg-gradient-to-r from-blue-500 to-purple-500"></div>

      <img
        src="src/img 3.webp"
        alt="Profile"
        className="mx-auto -mt-16 h-28 w-28 rounded-full border-4 border-white object-cover"
      />

      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-800">Muhammad </h2>

        <p className="mt-1 font-medium text-blue-600">
          UI/UX Designer
        </p>

        <p className="mt-3 text-gray-600">
          Creative designer passionate about building
          beautiful and user-friendly digital experiences.
        </p>

        <button
          onClick={() => setFollowing(!following)}
          className="mt-5 rounded-full bg-blue-600 px-8 py-2 font-semibold text-white transition hover:bg-blue-700"
        >
          {following ? "Following ✓" : "Follow"}
        </button>
      </div>
    </div>
  );
}

export default ProfileCard;
