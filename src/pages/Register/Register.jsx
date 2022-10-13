import React from "react";
import { Link } from "react-router-dom";
import "./Register.scss";

const Register = () => {
	return (
		<section className="auth">
			<h3>Register</h3>

			<form>
				<h4>Create account</h4>

				<div className="form-div">
					<div className="form-div_items">
						<label htmlFor="firstName">first name</label>
						<input type="text" name="firstName" id="firstName" />
					</div>
					<div className="form-div_items">
						<label htmlFor="lastName">last name</label>
						<input type="text" name="lastName" id="lastName" />
					</div>
					<div className="form-div_items">
						<label htmlFor="email">email name</label>
						<input type="email" name="email" id="email" />
					</div>
					<div className="form-div_items">
						<label htmlFor="number">phone name</label>
						<input type="number" name="number" id="number" />
					</div>
					<div className="form-div_selection">
						<select name="gender" id="gender">
							<option value="none" selected>
								Gender
							</option>
							<option value="male">male</option>
							<option value="female">female</option>
						</select>
					</div>

					<div className="form-div_selection">
						<select name="marital_status" id="marital_status">
							<option value="none" selected>
								Select marital status
							</option>
							<option value="single">single</option>
							<option value="married">married</option>
						</select>
					</div>

					<div className="form-div_item">
						<label htmlFor="password"></label>
						<input type="password" name="password" id="password" />
					</div>
				</div>

				<button className="form-btn">Register</button>

				<div className="form-redirect">
					<span>Already have an account?</span>
					<Link to="/login">Login</Link>
				</div>
			</form>
		</section>
	);
};

export default Register;
