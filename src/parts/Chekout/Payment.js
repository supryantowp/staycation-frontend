import React from "react";
import Fade from "react-reveal/Fade";
import logoBca from "assets/images/bca.png";
import logoMandiri from "assets/images/mandiri.png";
import InputFile from "elements/Form/InputFile/InputFile";
import InputText from "elements/Form/InputText/InputText";

export default function Payment({ data, itemDetails, chekout, onChange }) {
  const tax = 10;
  const subTotal = itemDetails.price * chekout.duration;
  const grandTotal = (subTotal * tax) / 100 + subTotal;

  return (
    <Fade>
      <div className="container" style={{ marginBottom: 30 }}>
        <div className="row justify-content-center align-items-center">
          <div className="col-5 border-right py-5" style={{ paddingRight: 80 }}>
            <Fade delay={300}>
              <p className="mb-4">Transer Pemabayaran:</p>
              <p>Tax: {tax}%</p>
              <p>Sub total: ${subTotal} USD</p>
              <p>Total: ${grandTotal} USD</p>
              <div className="row mt-4">
                <div className="col-3 text-right">
                  <img src={logoBca} alt="bca" width="60" />
                </div>
                <div className="col">
                  <dl>
                    <dd>Bank Central Asia</dd>
                    <dd>0391 9120</dd>
                    <dd>John Doe</dd>
                  </dl>
                </div>
              </div>

              <div className="row">
                <div className="col-3 text-right">
                  <img src={logoMandiri} alt="mandiri" width="60" />
                </div>
                <div className="col">
                  <dl>
                    <dd>Bank Mandiri</dd>
                    <dd>9312 39012</dd>
                    <dd>John Doe</dd>
                  </dl>
                </div>
              </div>
            </Fade>
          </div>
          <div className="col-5 py-5" style={{ paddingLeft: 80 }}>
            <Fade delay={600}>
              <label htmlFor="proofPayment">Upload Bukti Transfer</label>
              <InputFile
                accept="images/*"
                id="proofPayment"
                name="proofPayment"
                value={data.proofPayment}
                onChange={onChange}
              />
              <label htmlFor="bankName">Asal Bank</label>
              <InputText
                id="bankName"
                name="bankName"
                type="text"
                value={data.bankName}
                onChange={onChange}
              />
              <label htmlFor="bankHolder">Nama Pengirim</label>
              <InputText
                id="bankHolder"
                name="bankHolder"
                type="text"
                value={data.bankHolder}
                onChange={onChange}
              />
            </Fade>
          </div>
        </div>
      </div>
    </Fade>
  );
}
