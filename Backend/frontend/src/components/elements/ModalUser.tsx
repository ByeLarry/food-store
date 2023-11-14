import { useState } from "react";
import { History } from "./containers/History";
import { FormUser } from "./containers/FormUser";

export const ModalUser: React.FC = () => {
  const [history, setHistory] = useState(false);
  return (
    <>
      <div
        className="modal fade"
        id="modalUser"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                {!history ? "Данные пользователя" : "История заказов"}
              </h1>
              <div className="form-check form-switch mx-3 mt-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckChecked"
                  onClick={() => setHistory(!history)}
                />
              </div>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Закрыть"
              ></button>
            </div>
            <div className="modal-body">
              <div id="spinner"></div>
              {!history ? <FormUser /> : <History />}
            </div>
            <div className="modal-footer">
              <div>
                <button
                  className="btn btn-dark"
                  type="button"
                  onClick={() => {
                    document.cookie =
                      "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
                    window.location.href = "/";
                  }}
                >
                  Выйти из аккаунта
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};