export default async function handler(req, res) {
  const response = await fetch(
    `https://newsapi.org/v2/top-headlines?country=us&apiKey=5dc97cf8cdeb49d0b1152a08c8558652`,
    {
      headers: {
        "User-Agent": "MyVercelApp/1.0", // optional but recommended
      },
    }
  );

  const data = await response.json();
  res.status(200).json(data);
}
