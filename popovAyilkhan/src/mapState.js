import { toggleTheme } from "./actions";

const mapStateToProps = (state) => ({
  theme: state.theme,
});

const mapDispatchToProps = {
  toggleTheme,
};