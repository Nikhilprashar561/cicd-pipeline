import express from "express"

const app = express()
const port = 3000

app.get("/", (req, res) => {
  return res.json({
    message: "Server Up and Running",
    success: true,
    Work: "Learning CI CD with GitHub Actions",
    checking: "Github Actions is Up and Running",
  })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
