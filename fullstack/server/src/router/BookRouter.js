let router = require("express").Router();
const BookService = require("../service/BookService");

this.service = new BookService();

router.post("/", async (req, res) => {
  let dto = req.body;

  try {
    let entity = await this.service.create(dto);
    if (entity.erro) {
      res.status(500).send(entity.message);
    } else res.send(entity);
  } catch (err) {
    res.status(500).send(err.message);
  }
  return;
});

router.get("/list", (req, res) => {
  res.send(this.service.search({ size: 10 }));
});

router.put("/:id", async (req, res) => {
  let id = req.params.id;
  let dto = req.body;

  try {
    let entity = await this.service.update(dto, id);

    if (entity.erro) {
      res.status(500).send(entity);
    } else res.send(entity);
  } catch (err) {
    res.status(500).send(err);
  }
  return;
});

module.exports = router;
