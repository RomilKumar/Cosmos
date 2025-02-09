export default function errorHandling(name, value, setErrors) {
    if (value) {
        switch (name) {
            case "firstName":
            case "lastName":
                /^[a-zA-Z ]{0,15}$/.test(value)
                    ? setErrors((prev) => ({ ...prev, [name]: "" }))
                    : setErrors((prev) => ({
                          ...prev,
                          [name]: `${name} must contain only letters and should not exceed 15 characters`,
                      }));
                break;

            case "userName":
                /^[a-zA-Z0-9 ]{2,15}$/.test(value)
                    ? setErrors((prev) => ({ ...prev, [name]: "" }))
                    : setErrors((prev) => ({
                          ...prev,
                          [name]: `${name} must contain only numbers and letters and should be 2-15 characters`,
                      }));
                break;

            case "email":
                /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,100}$/.test(value)
                    ? setErrors((prev) => ({ ...prev, [name]: "" }))
                    : setErrors((prev) => ({
                          ...prev,
                          [name]: `Please enter a valid ${name}`,
                      }));
                break;

            case "contact":
                /^[0-9]{10}$/.test(value)
                    ? setErrors((prev) => ({ ...prev, [name]: "" }))
                    : setErrors((prev) => ({
                          ...prev,
                          [name]: "Enter valid mobile number.",
                      }));
                break;

            case "password":
            case "confirmPassword":
                value.length >= 8 && value.length <= 12
                    ? setErrors((prev) => ({ ...prev, [name]: "" }))
                    : setErrors((prev) => ({
                          ...prev,
                          [name]: `${name} must contain atleast 8 characters.`,
                      }));
                break;
        }
    }
}
