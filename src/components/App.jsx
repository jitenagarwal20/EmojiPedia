import React from "react";
import Infos from "../emojipedia";
import Emoji from "./Emoji";
import Header from "./Header";

function createEmoji(Info){
    return(<Emoji key={Info.id} emojiImg={Info.emoji} emojiName={Info.name} emojiMeaning={Info.meaning}/>)
}
function App() {
  return (
    <div>
      <Header />
      <dl className="dictionary">
        {Infos.map(createEmoji)};
      </dl>
    </div>
  );
}

export default App;
