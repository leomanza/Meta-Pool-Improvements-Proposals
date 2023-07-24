const authorId = "manzanal.near";

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 0.75em;
  h2 {
    font-style: normal;
    font-weight: 700;
    font-size: 1.125em;
    line-height: 1.5em;
    color: #000000;
  }
`;

const logo = <svg width="133" height="16" viewBox="0 0 133 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M5.63943 15.3416L10.7466 10.2344L15.8538 15.3416L20.961 10.2344L26.0682 15.3416L31.1754 10.2344L20.961 0.0200195L15.8538 5.12722L10.7466 0.0200195L0.532227 10.2344L5.63943 15.3416Z" fill="#032131" />
  <path d="M37.5586 15.1289H39.9207V4.16971L44.3895 15.1289H46.4536L50.9224 4.16971V15.1289H53.2845V0.23291H50.1776L45.496 11.9582L40.7293 0.23291H37.5586V15.1289Z" fill="#032131" />
  <path d="M60.9493 15.2566C63.6519 15.2566 65.4819 13.618 65.865 11.4688H63.5667C63.2475 12.6817 62.2261 13.384 60.8216 13.384C59.0128 13.384 57.8424 12.171 57.7786 10.3196V10.1707H65.9927C66.0352 9.87275 66.0565 9.57483 66.0565 9.29819C65.9927 6.10619 63.8859 4.10587 60.7365 4.10587C57.5232 4.10587 55.3739 6.34027 55.3739 9.70251C55.3739 13.0435 57.5232 15.2566 60.9493 15.2566ZM57.8637 8.48955C58.0339 6.93611 59.2895 5.95723 60.7578 5.95723C62.3538 5.95723 63.4816 6.87227 63.6731 8.48955H57.8637Z" fill="#032131" />
  <path d="M68.6187 12.171C68.6187 14.15 69.5125 15.1289 71.5979 15.1289H73.7259V13.1073H72.1087C71.2362 13.1073 70.9383 12.7881 70.9383 11.9369V6.25515H73.5983V4.23355H70.9383V1.19051H68.6187V4.23355H66.7248V6.25515H68.6187V12.171Z" fill="#032131" />
  <path d="M85.0223 13.1286C84.5541 13.1286 84.3201 12.9796 84.3201 12.4264V8.06395C84.3201 5.48907 82.6602 4.10587 79.7661 4.10587C77.021 4.10587 75.1909 5.42523 74.9569 7.55323H77.2125C77.3828 6.59563 78.2978 5.95723 79.6597 5.95723C81.1706 5.95723 82.0431 6.70203 82.0431 7.91499V8.57467H79.298C76.2549 8.57467 74.6377 9.83019 74.6377 12.0646C74.6377 14.0862 76.2975 15.2566 78.6809 15.2566C80.4471 15.2566 81.5537 14.4905 82.2772 13.384C82.2772 14.4692 82.7879 15.1289 84.2775 15.1289H85.4905V13.1286H85.0223ZM82.0431 10.6601C82.0218 12.3412 80.9153 13.4691 79.0001 13.4691C77.7445 13.4691 76.9785 12.8307 76.9785 11.9156C76.9785 10.8091 77.7658 10.2771 79.1916 10.2771H82.0431V10.6601Z" fill="#032131" />
  <path d="M92.4211 15.1289H94.8683V9.72379H98.2944C101.401 9.72379 103.444 7.85115 103.444 4.97835C103.444 2.08427 101.401 0.23291 98.2944 0.23291H92.4211V15.1289ZM98.1029 2.36091C99.8478 2.36091 100.954 3.36107 100.954 4.97835C100.954 6.57435 99.8265 7.59579 98.0816 7.59579H94.8683V2.36091H98.1029Z" fill="#032131" />
  <path d="M109.722 15.2566C113.042 15.2566 115.276 13.0222 115.276 9.68123C115.276 6.36155 113.042 4.10587 109.722 4.10587C106.403 4.10587 104.168 6.36155 104.168 9.68123C104.168 13.0222 106.403 15.2566 109.722 15.2566ZM109.722 13.2988C107.786 13.2988 106.53 11.788 106.53 9.68123C106.53 7.57451 107.786 6.06363 109.722 6.06363C111.659 6.06363 112.936 7.57451 112.936 9.68123C112.936 11.788 111.659 13.2988 109.722 13.2988Z" fill="#032131" />
  <path d="M122.274 15.2566C125.594 15.2566 127.828 13.0222 127.828 9.68123C127.828 6.36155 125.594 4.10587 122.274 4.10587C118.955 4.10587 116.72 6.36155 116.72 9.68123C116.72 13.0222 118.955 15.2566 122.274 15.2566ZM122.274 13.2988C120.338 13.2988 119.082 11.788 119.082 9.68123C119.082 7.57451 120.338 6.06363 122.274 6.06363C124.211 6.06363 125.488 7.57451 125.488 9.68123C125.488 11.788 124.211 13.2988 122.274 13.2988Z" fill="#032131" />
  <path d="M129.676 15.1289H131.975V0.23291H129.676V15.1289Z" fill="#032131" />
</svg>

const ContentContainer = styled.div`
  width: 100%;
  background: #fafafa;

  &.form {
    border: none;
    background: #fafafa;
  }

  * {
    margin: 0;
  }
`;
const Container = styled.div`
width: 100%;
background: #fafafa;
padding: 3em;

&.form {
  border: none;
  background: #fafafa;
}

* {
  margin: 0;
}
`


State.init({
  tab: props.tab ?? "home",
  content: props.content ?? "",
  transactionHashes: props.transactionHashes,
  transactionHashesIsHandled: false
});

const isForm = [
  "createproposal"
].includes(state.tab);

const update = (state) => State.update(state);

const getContent = {
  home: (
    <Widget
      src={`${authorId}/widget/Governance.Dashboard`}
      props={{
        tab: state.tab, update
      }}
    />
  ),
  createproposal: (
    <Widget
      src={`${authorId}/widget/Governance.Proposal.Create.Index`}
      props={{
        tab: state.tab, update, transactionHashes: state.transactionHashes, transactionHashesIsHandled: state.transactionHashesIsHandled
      }}
    />
  ),
  proposal: (
    <Widget
      src={`${authorId}/widget/Governance.Proposal.Index`}
      props={{
        tab: state.tab, update, mpip_id: props.mpip_id, transactionHashes: state.transactionHashes, transactionHashesIsHandled: state.transactionHashesIsHandled
      }}
    />
  )
}[state.tab];

return (
  <Container>
    <Header>
      <a href={`/${authorId}/widget/Governance.Index?tab=home`}
        onClick={() =>
          update({
            tab: "home"
          })
        }>
        {logo}
      </a>
      <Widget src={`${authorId}/widget/Governance.Balance`} props={{}} />
    </Header >
    <ContentContainer className={isForm ? "form" : ""}>
      {getContent}
    </ContentContainer>
  </Container>
)