import React from 'react';
import styles from './Quotes.module.css';

const TOKEN_USER =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IlRodSBPY3QgMTIgMjAyMyAxMjoxOToyMyBHTVQrMDAwMC5tcGFyYXYxMjRAZ21haWwuY29tIiwiaWF0IjoxNjk3MTEzMTYzfQ.pNFPq5C4ib1L19HjSrfxBbgWJwCLGhr34UcGSDOCuj4';

const Quotes = () => {
  const [quote, setQuote] = React.useState({
    phrase: '',
    book: '',
    chapter: 0,
    number: 0,
  });

  React.useEffect(() => {
    const getFetch = async (url) => {
      const res = await fetch(url, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${TOKEN_USER}`,
        },
      });

      const json = await res.json();

      const { chapter, number, text } = json;
      const { name } = json.book;

      setQuote({ phrase: text, chapter, number, book: name });
    };

    getFetch(`https://www.abibliadigital.com.br/api/verses/nvi/random`);
  }, []);

  return (
    <section className="sectionContainer">
      <div className={styles.quotes}>
        <h3 className={styles.phrase}>" {quote.phrase} "</h3>

        <p className={styles.author}>
          - {quote.book} {quote.chapter}.{quote.number}
        </p>
      </div>
    </section>
  );
};

export default Quotes;
