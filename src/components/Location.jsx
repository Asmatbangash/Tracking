import React from "react";

function Location() {
  return (
    <div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3281.7911440480643!2d73.07117758975036!3d33.63534113197416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8030951e9b7da7b3%3A0x8123f109bf72a4b!2sMK%20Smart%20Technologies!5e0!3m2!1sen!2s!4v1755684893574!5m2!1sen!2s"
        width="600"
        height="450"
        allowFullScreen=""
        Loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="h-60 my-10"
      ></iframe>
    </div>
  );
}

export default Location;
