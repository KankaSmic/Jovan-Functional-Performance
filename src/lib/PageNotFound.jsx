import { useLocation } from 'react-router-dom';
import { base44 } from '@/api/base44Client';
import { useQuery } from '@tanstack/react-query';


export default function PageNotFound({}) {
    const location = useLocation();
    const pageName = location.pathname.substring(1);

    const { data: authData, isFetched } = useQuery({
        queryKey: ['user'],
        queryFn: async () => {
            try {
                const user = await base44.auth.me();
                return { user, isAuthenticated: true };
            } catch (error) {
                return { user: null, isAuthenticated: false };
            }
        }
    });
    
    return (
        <div className="min-h-screen flex items-center justify-center p-6 bg-background">
            <div className="max-w-md w-full">
                <div className="text-center space-y-6">
                    <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center mx-auto">
                        <span className="font-heading text-2xl text-primary-foreground tracking-wider">JF</span>
                    </div>
                    <div className="space-y-2">
                        <h1 className="text-7xl font-heading text-muted-foreground/30">404</h1>
                        <div className="h-0.5 w-16 bg-border mx-auto"></div>
                    </div>
                    <div className="space-y-3">
                        <h2 className="text-2xl font-heading tracking-wide text-foreground">
                            Page Not Found
                        </h2>
                        <p className="text-muted-foreground font-body leading-relaxed">
                            The page <span className="font-medium text-foreground">"{pageName}"</span> could not be found.
                        </p>
                    </div>
                    
                    {isFetched && authData.isAuthenticated && authData.user?.role === 'admin' && (
                        <div className="mt-8 p-4 bg-card rounded-lg border border-border">
                            <div className="flex items-start space-x-3">
                                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                                </div>
                                <div className="text-left space-y-1">
                                    <p className="text-sm font-medium text-foreground font-body">Admin Note</p>
                                    <p className="text-sm text-muted-foreground font-body leading-relaxed">
                                        This could mean that the AI hasn't implemented this page yet. Ask it to implement it in the chat.
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}
                    
                    <div className="pt-6">
                        <button 
                            onClick={() => window.location.href = '/'} 
                            className="inline-flex items-center px-6 py-3 text-sm font-body font-medium text-primary-foreground bg-primary rounded-lg hover:bg-primary/90 transition-colors duration-200"
                        >
                            Go Home
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}