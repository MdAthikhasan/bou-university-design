import Img from "../../assets/images/nis.jpg";
import Img2 from "../../assets/images/infocom.jpg";
const Applications = () => {
  const data = [
    {
      title: "তথ্য অধিকার",
      image: Img,
      items: [
        "প্রেস বিজ্ঞপ্তি/সংবাদ",
        "তথ্য অধিকার আইন/ফরম/কর্মকর্তা",
        "তথ্য অধিকার সভা/কর্মশালা/প্রশিক্ষণ",
        "জনসচেতনতামূলক কার্যক্রম / ফিচার",
        "কর্ম পরিকল্পনা/ প্রতিবেদন",
      ],
    },
    {
      title: "বার্ষিক কর্মসম্পাদন চুক্তি",
      image: Img2,
      items: [
        "এপিএ টিম",
        "চুক্তিসমূহ/ নির্দেশিকা",
        "এপিএ প্রতিবেদন",
        "এপিএ সভার কার্যবিবরণী",
      ],
    },
    {
      title: "জাতীয় শুদ্ধাচার কৌশল",
      image: Img,
      items: [
        "শুদ্ধাচার কমিটিরমূহ/ পুরস্কার",
        "শুদ্ধাচার কর্মপরিকল্পনা ও নীতিমালা",
        "শুদ্ধাচার প্রতিবেদন",
        "শুদ্ধাচার কার্যবিবরণী",
        "শুদ্ধাচার ভিডিও চিত্র",
      ],
    },
    {
      title: "সেবা প্রদান প্রতিশ্রুতি",
      image: Img2,
      items: [
        "সিটিজেন্স চার্টার",
        "সেবা প্রদান কমিটি",
        "সেবা প্রদান প্রতিবেদন",
        "সেবা প্রদান কার্যবিবরণী",
      ],
    },
    {
      title: "অভিযোগ প্রতিকার ব্যবস্থাপনা",
      image: Img,
      items: [
        "অনিক/ আপিল কর্মকর্তা",
        "অভিযোগ/কর্মপরিকল্পনা",
        "আইন/বিধি/নীতিমালা",
        "প্রতিবেদন/কার্যবিবরণী",
      ],
    },
    {
      title: "উদ্ভাবনী কার্যক্রম",
      image: Img2,
      items: [
        "ইনোভেশন টিম",
        "কার্যবিবরণী/সেবা সহজীকরণ",
        "ই-গভর্ন্যান্স/ উদ্ভাবন কর্মপরিকল্পনা",
        "ইনোভেশন মূল্যায়ন প্রতিবেদন",
      ],
    },
  ];

  return (
    <div className="container my-4">
      <div className="row g-4">
        {data.map((card, index) => (
          <div className="col-md-6 col-lg-4" key={index}>
            <div
              className="card  h-100  border-0 shadow "
              style={{ backgroundColor: "#F1F1F1" }}
            >
              <div className="card-body">
                <div className="text-center mb-3"></div>
                <h5 className="card-title text-center">{card.title}</h5>
                <div className="d-flex">
                  <img
                    src={card.image}
                    alt={card.title}
                    style={{ maxWidth: "100px", maxHeight: "100px" }}
                  />
                  <ul className="list-unstyled mt-3">
                    {card.items.map((item, i) => (
                      <li key={i} className="mb-2">
                        <i className="bi bi-chevron-right me-2"></i>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Applications;
