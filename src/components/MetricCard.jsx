const MetricCard = ({ title, value, icon, subtext }) => {
    return (
        <div className="bg-secondary text-primary border border-gray-200 shadow-lg rounded-lg w-64 flex flex-col">      
            <div className="px-6 pt-6 flex">
                <div className="">{icon}</div>
            </div>
            <div className="p-6 pt-0">
                <p className="text-lg font-medium">{title}</p>
                <h3 className="text-4xl font-semibold">{value}</h3>
            </div>
      </div>
      
    );
  }
  
  export default MetricCard;
  