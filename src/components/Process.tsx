const steps = [
  { title: 'Zavoláte nebo napíšete', text: 'Řeknete nám, co potřebujete, kde a kdy.' },
  { title: 'Domluva nebo obhlídka', text: 'Jednodušší věci vyřešíme po telefonu, jinak se přijedeme podívat.' },
  { title: 'Cenová kalkulace', text: 'Připravíme cenu a domluvíme termín realizace.' },
  { title: 'Realizace a předání', text: 'Práci uděláme pečlivě, po sobě uklidíme a zakázku předáme.' },
];

export default function Process() {
  return (
    <ol className="process">
      {steps.map((s, i) => (
        <li key={s.title}>
          <span className="process__n" aria-hidden="true">
            {i + 1}
          </span>
          <h3 className="h3">{s.title}</h3>
          <p>{s.text}</p>
        </li>
      ))}
    </ol>
  );
}
