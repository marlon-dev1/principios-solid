(() => {
    function getMovieById(id: string) {
        console.log({ id });
    }

    function getMovieCastById(id: string) {
        console.log({ id });
    }

    function getActorBioById(id: string) {
        console.log({ id });
    }

    // Crear una película
    interface Movie {
        cast: string[];
        description: string;
        rating: number;
        title: string;
    }
    function createMovie({ cast, description, rating, title }: Movie) {
        console.log({ title, description, rating, cast });
    }

    function checkFullName(fullName: string) {
        console.log({ fullName });
        return true;
    }

    function createActor(fullName: string, birthdate: Date): boolean {
        // tarea asincrona para verificar nombre
        // ..
        // ..
        if (fullName === 'fernando') return false;

        console.log('Crear actor', birthdate);
        return true;
    }

    const getPayAmountFail = ({ isDead = false, isSeparated = true, isRetired = false }) => {
        let result;
        if (isDead) {
            result = 1500;
        } else {
            if (isSeparated) {
                result = 2500;
            } else {
                if (isRetired) {
                    result = 3000;
                } else {
                    result = 4000;
                }
            }
        }

        return result;
    };

    const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }): number => {
        if (isDead) return 1500;

        if (isSeparated) return 2500;

        return isRetired ? 3000 : 4000;
    };
})();
