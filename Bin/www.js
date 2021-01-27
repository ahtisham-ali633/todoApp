import app from '../Http/Bootstrap/app';
import {port} from '../App/Infrastructure/Config/application';

app.listen(port, () => console.log(`server running on port ${port}`));