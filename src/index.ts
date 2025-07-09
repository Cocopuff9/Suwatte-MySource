import axios from 'axios'
import cheerio from 'cheerio'

export async function getMangaList() {
  const res = await axios.get('https://hdporncomics.com')
  const $ = cheerio.load(res.data)

  const manga = []

  $('.manga-card').each((_, el) => {
    manga.push({
      id: $(el).find('a').attr('href'),
      title: $(el).find('.title').text(),
      image: $(el).find('img').attr('src')
    })
  })

  return manga
}
