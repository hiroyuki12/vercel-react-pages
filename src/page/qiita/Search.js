import React from "react";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: "" };
  }

  render() {
    return (
      <div>
        <a className="QiitaApp-link" href="https://mbp.hatenablog.com/entry/2021/07/15/214300" target="_blank" rel="noreferrer">ReactでQiita APIから記事情報を取得して表示</a><br />
        <a className="QiitaApp-link" href="https://qiita.com/kei_1011/items/cdc12086347025719152" target="_blank" rel="noreferrer">React Qiita API から記事情報を取得して表示させる - Qiita</a>
        <h3>QiitaでReactタグありの記事を表示</h3>
      </div>
    );
  }

  // valueが変更された際に実行
  handleChange = (event) => {
    // 変更したvalueが返ってくる
    const title = event.target.value;
    // stateを変更
    this.setState({ title: title });
  };

  // submitされた際に実行
  handleSubmit = (event) => {
    event.preventDefault(); // ページ遷移防止
    // 受け取ったメソッドを実行し、app の state を変更している
    this.props.search(this.state.title);
    this.setState({ title: "" }); // submit後は、titleを空にする
  };
}

export default Search;
