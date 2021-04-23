import db from "../models";
const Marks = db.Marks;

const updateMarks = (req, res) => {
  let { test1, test2, test3, finalIa, subcode, userID, ssid } = req.body;

  Marks.update(
    {
      test1,
      test2,
      test3,
      finalIa,
    },
    { where: { subcode, userID, ssid } }
  )
    .then((score) => res.status(200).json({ score }))
    .catch((err) => res.status(500).json({ err }));
};

export { updateMarks };
