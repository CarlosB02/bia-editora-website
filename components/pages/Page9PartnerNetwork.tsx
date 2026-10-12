import React from 'react';
import { PartnerNetworkSvg } from '../svg/PartnerNetworkSvg';

interface Page9PartnerNetworkProps {
  currentRoute?: string;
  activePartner: number | null;
  onHoverPartner: (idx: number | null) => void;
}

export function Page9PartnerNetwork({
  currentRoute,
  activePartner,
  onHoverPartner,
}: Page9PartnerNetworkProps) {
  const isH1 = currentRoute === '/parceiros';

  return (
    <section
      data-label="Capítulo IV · Rede de Parceiros"
      data-ch="4"
      style={{ width: '100%', height: '100%' }}
    >
      <div className="rh">
        <span>Bia Editora</span>
        <span>IV · Parceiros</span>
      </div>
      <div className="pg">
        <div className="kicker rev">Capítulo IV</div>
        {isH1 ? (
          <h1 className="rev d1">
            Rede de <em>parceiros</em>
          </h1>
        ) : (
          <h2 className="rev d1">
            Rede de <em>parceiros</em>
          </h2>
        )}
        <p className="rev d2">
          Uma editora pequena não anda sozinha. Viriato também não andava.
        </p>
        <div className="net rev d3">
          <PartnerNetworkSvg
            activePartner={activePartner}
            onHoverPartner={onHoverPartner}
          />
        </div>
      </div>
      <div className="folio">9</div>
    </section>
  );
}
