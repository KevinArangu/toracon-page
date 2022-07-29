const GoogleTagBody = () => {
  return (
    <noscript
      dangerouslySetInnerHTML={{
        __html: `<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5V9RVN9"
          height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>`,
      }}
    />
  )
}

export default GoogleTagBody
