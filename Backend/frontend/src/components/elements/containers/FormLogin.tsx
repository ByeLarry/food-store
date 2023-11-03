import { SendLogin } from "../../functions/SendLogin";

export const FormLogin: React.FC = () => {
  return (
    <form action="api/login" method="POST">
      <div className="form-group">
        <input
          type="email"
          className="form-control"
          id="loginMailInput"
          name="loginMailInput"
          required
          placeholder="Почта"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            e.currentTarget.classList.remove("error");
          }}
        />

        <div className="my-3">
          <input
            type="password"
            className="form-control"
            id="loginPasswordInput"
            name="loginPasswordInput"
            required
            placeholder="Пароль"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              e.currentTarget.classList.remove("error");
            }}
          />
        </div>
      </div>
      <div className="modal-footer">
        <button type="submit" className="btn btn-primary" onClick={SendLogin()}>
          Войти
        </button>
      </div>
      <div
        className="alert alert-danger d-none mx-3"
        id="loginAlert"
        onClick={(e: React.MouseEvent<HTMLDivElement>) => {
          e.currentTarget.classList.add("d-none");
        }}
      >
        Для входа необходимо заполнить все обязательные поля
      </div>
    </form>
  );
};
