import Styled from './Layout.styled'
function Layout({ sol, sag, baslik }) {
  return (
    <Styled>
      <div className="container">
        <div className="baslik">{baslik}</div>
        <div className="content">
          <div className="sol">{sol}</div>
          <div className="sag">{sag}</div>
        </div>
      </div>
    </Styled>
  )
}
export default Layout
