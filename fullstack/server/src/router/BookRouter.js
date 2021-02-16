let router = require("express").Router();
const BookService = require("../service/BookService");
const ModelMiddleware = require("./middlware/ModelMiddleware");

this.service = new BookService();

router.use(ModelMiddleware);
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

router.get("/search", async (req, res) => {
  let result = await this.service.search(req.query);
  res.send(result);
});

router.get("/list", async (req, res) => {
  let result = await this.service.search({}, { size: 10 });
  res.send(result);
});
router.get("/:id", async (req, res) => {
  let id = req.params.id;
  let result = await this.service.get(id);
  res.send(result);
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
