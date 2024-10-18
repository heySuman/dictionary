import { HiMiniSpeakerWave } from "react-icons/hi2";
import { IResultInterface } from "../interface/result";
import useSound from "use-sound";

const Card = (data: IResultInterface) => {
  const [play] = useSound(data.phonetics[0].audio);
  return (
    <section className="card">
      <div className="card__name__container">
        <button onClick={() => play()} id="play-sound-btn">
          <HiMiniSpeakerWave />
        </button>
        <h2>{data.word}</h2>
        <p>{data.phonetic}</p>
      </div>
      <div>
        {data.meanings.map((i, index) => {
          return (
            <div key={index + 1}>
              <i>{i.partOfSpeech}</i>
              <p>{i.definitions[0].definition}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export { Card };
