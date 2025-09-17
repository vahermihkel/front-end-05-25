import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"

function AdminHome() {
   const { t } = useTranslation();
  
   return (
    <div>

     <Link to="/admin/maintain-products">
        <button>{t("admin.maintain.products")}</button>
     </Link>

     <Link to="/admin/add-product">
        <button>{t("admin.add.product")}</button>
     </Link>

     <Link to="/admin/maintain-categories">
        <button>{t("admin.maintain.categories")}</button>
     </Link>

     <Link to="/admin/maintain-shops">
        <button>{t("admin.maintain.shops")}</button>
     </Link>

    </div>
  )
}

export default AdminHome