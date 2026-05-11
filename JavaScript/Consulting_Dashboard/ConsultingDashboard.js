function getConsultantsByCompany(companies, consultants)
{
    const cbc = {};
    for (let i = 0; i < consultants.length; i++)
    {
        corpo = consultants[i].companyId;
        if (cbc[corpo] !== undefined)
        {
            cbc[corpo].push(consultants[i].name);
        }
        else
            cbc[corpo] = [consultants[i].name];
    }

    const result = {};
    for (let i = 0; i < companies.length; i++)
    {
        const idCompanies = companies[i].id;
        if (companies[idCompanies] === cbc[i])
        {
            result[companies[i].name] = cbc[idCompanies] || []
        }
    }
}