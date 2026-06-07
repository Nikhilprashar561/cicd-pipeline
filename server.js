import express from "express"

const app = express()
const port = 3000

app.get("/", (req, res) => {
  return res.json({
    message: "Server Up and Running",
    success: true,
    Work: "Learning CI CD with GitHub Actions",
    checking: "Github Actions is Up and Running",
    whyHealth: "Some How Health Route is Not Working",
    docker: "Docker is Up and Running f🐟",
    caddy: "up and Running 🚀"
  })
})

app.get("/health", (req, res) => {
  return res.json({
    message: "Health Check Successful"})
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
