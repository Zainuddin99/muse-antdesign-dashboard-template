import { Button, Result } from "antd";
import { useNavigate } from "react-router-dom";

function NoPage() {
    const navigate = useNavigate();

    const goToHomePage = () => {
        navigate("/dashboard/dashboard");
    };

    return (
        <div className="grid-c" style={{ height: "100vh" }} >
            <Result
                status="404"
                style={{ backgroundColor: "#fff", width: "400px" }}
                title="404"
                subTitle="Sorry, the page you visited does not exist."
                extra={
                    <Button onClick={goToHomePage} type="primary">
                        Back Home
                    </Button>
                }
            />
        </div>
    );
}

export default NoPage;
